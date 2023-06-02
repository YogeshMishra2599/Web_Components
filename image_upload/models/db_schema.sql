CREATE DATABASE Web_Components;

CREATE TABLE IF NOT EXISTS uploaded_img (
    img_id SERIAL PRIMARY KEY,
    img_path VARCHAR(255) NOT NULL
);