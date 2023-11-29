SELECT 'CREATE DATABASE ipassword'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'ipassword')\gexec
GRANT ALL PRIVILEGES ON DATABASE ipassword TO postgres;
