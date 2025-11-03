# URL-Shortener
Developed a URL Shortener Web Application

# Overview
This is a high-efficiency, full-stack web application designed to convert long URLs into short, unique, and easy-to-share links. Built using the MERN stack, the service emphasizes fast redirection performance, robust API design, and utilizes secure, collision-resistant short codes.
This project demonstrates proficiency across the entire software development life cycle, from schema design to frontend state management.

# Key Features

> URL Shortening: Converts any valid long URL into a short, unique identifier.

> Fast Redirection: Redirects users instantly from the short code to the original URL with near $O(1)$ lookup time.

> Secure ID Generation: Utilizes the highly secure and efficient nanoid library for generating short, collision-resistant custom IDs.

> Input Validation: Robust, client-side form validation implemented using React Hook Form combined with Zod schema definitions.

> Cloud Persistence: Leverages MongoDB Atlas for reliable, cloud-hosted data storage.

# Architecture & Technical Decisions

1. Data Model and Speed Optimization

Design Decision: To achieve near-instantaneous redirection speed, the MongoDB schema was designed to utilize the generated short code as the primary field.

Implementation: A unique index was created on the short code column in MongoDB Atlas. This indexing allows the database to fetch the corresponding long URL , which is crucial for handling high-volume redirection requests efficiently.

2. Secure ID Generation

Instead of using simple incremental IDs, nanoid was implemented on the server to ensure that every generated short code is secure, random, and highly resistant to collisions, making the service reliable and scalable.
