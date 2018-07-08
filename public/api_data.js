define({ "api": [
  {
    "type": "post",
    "url": "/card",
    "title": "",
    "group": "Card",
    "name": "CreateCard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Card",
            "description": "<p>A newly created card element</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:8080/card",
        "type": "curl"
      }
    ],
    "description": "<p>LoggedIn user can create a new card</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization Header",
          "content": "{\n \"authorization\" : \"dfjjfdla98826830271\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_img_top",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_text",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "list_group1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "list_group2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "list_group3",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/card.controller.js",
    "groupTitle": "Card"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "",
    "group": "User",
    "name": "UserCard",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>A newly signed up cms user</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:8080/signup",
        "type": "curl"
      }
    ],
    "description": "<p>A user can signup to become a cms user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "",
    "group": "User",
    "name": "loginUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>user must need to provide username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>user must need to provide password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params :",
          "content": "{\n \"username\"  : \"testuser\",\n \"password\" : \"password12\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Token",
            "description": "<ul> <li>JSON Web Token (JWT) to acces proceted routes</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login Response:",
          "content": "{\n \"token\" : \"XZADJHASGDJHASGDJHAGSDJAGSJDH\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:8080/login",
        "type": "curl"
      }
    ],
    "description": "<p>User can login to the system</p>",
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "User"
  }
] });