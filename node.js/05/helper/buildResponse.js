class BuildResponse {
    success = (response, data, status = 200) => response.status(status).send(data);

    error = (response, message, status = 400) => response.status(status).json({ success: false, error: message });
}

module.exports = new BuildResponse();