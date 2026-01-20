# Playwright API Automation Framework

A robust API testing framework built with **Playwright** to validate the core functionalities of the [Restful-booker](https://restful-booker.herokuapp.com/) platform. This project demonstrates automated testing of RESTful web services, focusing on security, data integrity, and CI/CD integration.

## 🚀 Key Features
* **Full CRUD Lifecycle**: Automates the creation, retrieval, update, and deletion of booking records.
* **Authentication Flow**: Handles dynamic token generation via `/auth` and applies it to secure endpoints using Cookie headers.
* **Smart Assertions**: Validates status codes, status texts, and JSON schema consistency.
* **CI/CD Integrated**: Automated test execution via **GitHub Actions** on every push to the main branch.
* **Error Handling**: Implements robust logic to handle non-JSON responses and 404 verification post-deletion.

## 🛠️ Tech Stack
* **Language**: JavaScript (Node.js)
* **Testing Framework**: Playwright Test
* **CI/CD**: GitHub Actions
* **Reporting**: Playwright HTML Reporter
