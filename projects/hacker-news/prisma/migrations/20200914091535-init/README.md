# Migration `20200914091535-init`

This migration has been generated by EmonHR at 9/14/2020, 3:15:35 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200914091535-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+// Tells Prisma you’ll be using SQLite for your database connection
+datasource db {
+  provider = "sqlite" 
+  url = "***"
+}
+
+// Indicates that you want to genenerate Prisma Client
+generator client {
+  provider = "prisma-client-js"
+}
+
+// Link as a model
+model Link {
+  id          Int      @id @default(autoincrement())
+  createdAt   DateTime @default(now())
+  description String
+  url         String
+}
```


