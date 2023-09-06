# **JasmineAPI**

JasmineAPI is a Node.js and Express.js based API that acts as a wrapper for an OpenAI GPT model to simulate a digital persona named Jasmine. It provides endpoints for getting agent information, retrieving conversation history, and generating responses using conversation history.

## **Table of Contents**

- **[Installation](https://chat.openai.com/c/59abbab8-3731-458f-be58-47809e622839#installation)**
- **[Usage](https://chat.openai.com/c/59abbab8-3731-458f-be58-47809e622839#usage)**
- **[Configuration](https://chat.openai.com/c/59abbab8-3731-458f-be58-47809e622839#configuration)**
- **[Endpoints](https://chat.openai.com/c/59abbab8-3731-458f-be58-47809e622839#endpoints)**
- **[Database](https://chat.openai.com/c/59abbab8-3731-458f-be58-47809e622839#database)**
- **[Environment Variables](https://chat.openai.com/c/59abbab8-3731-458f-be58-47809e622839#environment-variables)**
- **[Contributing](https://chat.openai.com/c/59abbab8-3731-458f-be58-47809e622839#contributing)**
- **[License](https://chat.openai.com/c/59abbab8-3731-458f-be58-47809e622839#license)**

## **Installation**

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/JasmineAPI.git
   cd JasmineAPI

   ```

2. Install the dependencies:

   ```bash
   npm install

   ```

3. Set up your environment variables. Rename **`.env.example`** to **`.env`** and fill in the required variables.
4. Start the server:

   ```bash
   npm start

   ```

## **Usage**

Once the server is running, you can interact with the API using your preferred API client (e.g., Postman, cURL). Refer to the **[Endpoints](https://chat.openai.com/c/59abbab8-3731-458f-be58-47809e622839#endpoints)** section for details on available API routes.

## **Configuration**

The configuration for the API can be found in the **`config`** directory. Adjust the settings in these files to tailor the API behavior according to your needs.

## **Endpoints**

- **`/v1/agent`**
  - **`GET`**: Get agent information
- **`/v1/conversation`**
  - **`GET`**: Get conversation history
- **`/v1/chat/completion`**
  - **`POST`**: Generate a response using conversation history

For detailed information on request and response formats, refer to the **[API Specification](https://chat.openai.com/c/API_SPECIFICATION.md)**.

## **Database**

JasmineAPI uses MongoDB to store conversation history and response data. Refer to the **[Database](https://chat.openai.com/c/DATABASE.md)** documentation for details on the database schema and interaction.

## **Environment Variables**

The API requires certain environment variables to be set for proper functionality. Refer to the **`.env.example`** file for a list of required variables.

## **Contributing**

Contributions to JasmineAPI are welcome! Feel free to open issues and submit pull requests.

1. Fork the repository.
2. Create a new branch for your feature: **`git checkout -b feature-name`**
3. Make your changes and commit: **`git commit -m 'Add some feature'`**
4. Push to the branch: **`git push origin feature-name`**
5. Submit a pull request.

## **License**

This project is licensed under the **[MIT License](https://opensource.org/license/mit/)**.
