CREATE TABLE "ISSUE_FILTERS" (
  "ID" INTEGER NOT NULL GENERATED BY DEFAULT AS IDENTITY (START WITH 1, INCREMENT BY 1),
  "NAME" VARCHAR(100) NOT NULL,
  "SHARED" BOOLEAN NOT NULL DEFAULT FALSE,
  "USER_LOGIN" VARCHAR(255),
  "DESCRIPTION" VARCHAR(4000),
  "DATA" CLOB(2147483647),
  "CREATED_AT" TIMESTAMP,
  "UPDATED_AT" TIMESTAMP
);

CREATE TABLE "PROJECTS" (
  "ID" INTEGER NOT NULL GENERATED BY DEFAULT AS IDENTITY (START WITH 1, INCREMENT BY 1),
  "KEE" VARCHAR(400),
  "ROOT_ID" INTEGER,
  "UUID" VARCHAR(50),
  "PROJECT_UUID" VARCHAR(50),
  "MODULE_UUID" VARCHAR(50),
  "MODULE_UUID_PATH" VARCHAR(4000),
  "NAME" VARCHAR(256),
  "DESCRIPTION" VARCHAR(2000),
  "ENABLED" BOOLEAN NOT NULL DEFAULT TRUE,
  "SCOPE" VARCHAR(3),
  "QUALIFIER" VARCHAR(10),
  "DEPRECATED_KEE" VARCHAR(400),
  "PATH" VARCHAR(2000),
  "LANGUAGE" VARCHAR(20),
  "COPY_RESOURCE_ID" INTEGER,
  "LONG_NAME" VARCHAR(256),
  "PERSON_ID" INTEGER,
  "CREATED_AT" TIMESTAMP
);
