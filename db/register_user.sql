INSERT INTO review_users (email, password)
VALUES ($1, $2)
RETURNING email;
