# **PersonaTalk API**

PersonaTalk is a Node.js and Express.js-based API that enables users to interact with various digital personas using OpenAI's GPT model. It offers endpoints for creating and managing agents and users, retrieving agent information, conversation history, and generating responses using conversation history.

## **Table of Contents**

- **[Installation](#installation)**
- **[Usage](#usage)**
- **[Endpoints](#endpoints)**
- **[Environment Variables](#environment-variables)**
- **[Contributing](#contributing)**
- **[License](#license)**

## **Installation**

1. Clone this repository:

   ```
   git clone https://github.com/chris-cozy/PersonaTalk.git
   cd PersonaTalk
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Set up your environment variables using a **`.env`** and fill in the required variables.
4. Start the server:

   ```
   npm start
   ```

## **Usage**

Once the server is running, you can interact with the API using your preferred API client (e.g., Postman, cURL). Refer to the **[Endpoints](#endpoints)** section for details on available API routes.

## **Configuration**

The configuration for the API can be found in the **`config`** directory. Adjust the settings in these files to tailor the API behavior according to your needs.

## **Endpoints**

### **Agents**

- **GET /v1/agent**: Get all agents' information.
- **POST /v1/agent**: Create a new agent.
- **DELETE /v1/agent**: Delete all agents' information.

- **GET /v1/agent/:agent_name**: Get specified agent's information.
- **DELETE /v1/agent/:agent_name**: Delete specified agent.

### **Users**

- **GET /v1/user**: Get all users' information.
- **DELETE /v1/user**: Delete all users' information.

- **GET /v1/user/:username**: Get specified user's information.
- **DELETE /v1/user/:username**: Delete specified user.

### **Conversations**

- **GET /v1/conversation**: Get all conversations
- **DELETE /v1/conversation**: Delete all conversations

- **GET /v1/conversation/:username**: Get all conversations for the specified user
- **DELETE /v1/conversation/:username**: Delete all conversations for the specified user

- **GET /v1/conversation/:username/:agent_name**: Get conversation between specified user and agent
- **DELETE /v1/conversation/:username/:agent_name**: Delete conversation between specified user and agent

### **Chatting**

- **POST /v1/chat/completion**: Create a response for the given message using conversation history.

### **Authentication**

- **POST /v1/auth/register**: Register a new user of the application
- **POST /v1/auth/login**: Login as a user of the application
- **GET /v1/auth/logout**: Logout as a user of the application
- **GET /v1/auth/current**: Get the currently authenticated user of the application

For detailed information on request and response formats, refer to the **API Specification**.

## **Database**

PersonaTalk uses MongoDB to store conversation history and response data. Refer to the database config files and models documentation for details on the database schema and interaction.

## **Environment Variables**

The API requires certain environment variables to be set for proper functionality. Refer to the **`.env.example`** file for a list of required variables.

## **Contributing**

Contributions to PersonaTalk are welcome! Feel free to open issues and submit pull requests.

1. Fork the repository.
2. Create a new branch for your feature: **`git checkout -b feature-name`**
3. Make your changes and commit: **`git commit -m 'Add some feature'`**
4. Push to the branch: **`git push origin feature-name`**
5. Submit a pull request.

## **License**

This project is licensed under the **[MIT License](https://opensource.org/license/mit/)**.
