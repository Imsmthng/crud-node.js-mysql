# crud-node.js-mysql

First we need to create a directory

```bash
$ mkdir crud-node.js-mysql
$ cd crud-node.js-mysql
```

``` bash
npm init
```

* name: (crud-node.js-mysql) 
* version: (1.0.0) 
* description: Node.js CRUD with mysql database
* entry point: (index.js) server.js
* test command: 
* git repository: 
* keywords: node.js, express, jwt, authentication, mysql
* author: cesar agustin
* license: (ISC)

Is this ok? (yes) yes

package.json will now look like this:

```javascript
{
  "name": "crud-node.js-mysql",
  "version": "1.0.0",
  "description": "Node.js CRUD with mysql database",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Imsmthng/crud-node.js-mysql.git"
  },
  "keywords": [
    "node.js",
    "express",
    "jwt",
    "authentication",
    "mysql"
  ],
  "author": "cesar agustin",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Imsmthng/crud-node.js-mysql/issues"
  },
  "homepage": "https://github.com/Imsmthng/crud-node.js-mysql#readme",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mysql2": "^2.2.5",
    "sequelize": "^6.3.5"
  }
}
```

Now lets install all the necessary modules:
* express
* cors
* body-parser
* sequelizer
* mysql2
* jsonwebtoken
* bcryptjs

Run this command in your terminal:
```
npm install express sequelize mysql2 body-parser cors jsonwebtoken bcryptjs --save

```

>Author:[Cesar Agustin](agustin.cesara13@gmail.com "Cesar Agustin")