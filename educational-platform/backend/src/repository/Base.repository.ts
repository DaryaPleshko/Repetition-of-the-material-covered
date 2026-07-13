import { Pool, PoolClient } from 'pg';
import { pool } from '../config/database.config';

export abstract class BaseRepository {
  protected pool: Pool = pool;

  protected async executeQuery<T>(
    query: string,
    params: any[] = []
  ): Promise<T[]> {
    const client = await this.pool.connect();
    try {
      const result = await client.query(query, params);
      return result.rows as T[];
    } finally {
      client.release();
    }
  }

  protected async executeTransaction<T>(
    callback: (client: PoolClient) => Promise<T>
  ): Promise<T> {
    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');
      const result = await callback(client);
      await client.query('COMMIT');
      return result;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  protected async executeOne<T>(
    query: string,
    params: any[] = []
  ): Promise<T | null> {
    const rows = await this.executeQuery<T>(query, params);
    return rows.length > 0 ? rows[0] : null;
  }
}
