SELECT 'CREATE DATABASE danedu'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'danedu')\gexec
GRANT ALL PRIVILEGES ON DATABASE danedu TO postgres;
