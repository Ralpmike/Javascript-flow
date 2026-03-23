## Base URL
`https://bakery-api-qqsg.onrender.com/api`

---

## 1. Products Endpoints

### Get All Products
Retrieves the list of all desserts in the catalog.
- **URL:** `/products`
- **Method:** `GET`
- **Response Code:** `200 OK`
- **Response Body:**
```json
[
{
"_id": "...",
"name": "Waffle with Berries",
"category": "Waffle",
"price": 6.5,
"image": {
"thumbnail": "/assets/images/image-waffle-thumbnail.jpg",
"mobile": "/assets/images/image-waffle-mobile.jpg",
"tablet": "/assets/images/image-waffle-tablet.jpg",
"desktop": "/assets/images/image-waffle-desktop.jpg"
}
}
]
```

### Get Product by Name
Retrieves a single product details using its name (case-insensitive).
- **URL:** `/products/:name`
- **Method:** `GET`
- **Example:** `/products/classic%20tiramisu`
- **Response Code:** `200 OK` (or `404 Not Found`)

### Create New Product
Adds a new dessert to the database.
- **URL:** `/products`
- **Method:** `POST`
- **Request Body:**
```json
{
"name": "Strawberry Cheesecake",
"category": "Cake",
"price": 5.5,
"image": {
"thumbnail": "/assets/images/custom-thumb.jpg",
"mobile": "/assets/images/custom-mobile.jpg",
"tablet": "/assets/images/custom-tablet.jpg",
"desktop": "/assets/images/custom-desktop.jpg"
}
}
```
- **Response Code:** `201 Created`

### Update Product (Full Replace)
Replaces all fields of an existing product.
- **URL:** `/products/:name`
- **Method:** `PUT`
- **Request Body:** (Same as POST)
- **Response Code:** `200 OK`

### Patch Product (Partial Update)
Updates specific fields (e.g., just the price) of an existing product.
- **URL:** `/products/:name`
- **Method:** `PATCH`
- **Example Request Body:** `{ "price": 7.5 }`
- **Response Code:** `200 OK`

### Delete Product
Removes a product from the database.
- **URL:** `/products/:name`
- **Method:** `DELETE`
- **Response Code:** `200 OK`
- **Response Body:** `{ "success": true, "message": "Product deleted successfully" }`

---

## 2. Static Assets
Images and icons are served from the `/assets` directory.
- **Pattern:** `[BASE_URL_ROOT]/assets/images/[FILENAME]`
- **Example:** `https://bakery-api.onrender.com/assets/images/image-baklava-desktop.jpg`