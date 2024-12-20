# Find My Flight

The project is a multi-module project composed of two main modules:
- the APIs (`packages/api`)
- The WebApp (`packages/webapp`)

The API module is a dependency of the WebApp so that they can be independently developped. As such, they need different configurations.

## APIs

Create a `.env` file in `packages/api` with the following properties:

```bash
API_SERVER_PORT=9678            # it specifies the port for the HTTP server
NODE_ENV=development            # environment type 
```

To run the server:

```bash
make start-api
```

---

## WebApp

Create a `.env` file in `packages/webapp` with the following properties:

```bash
SERVER_PORT=3001                    # it specifies the port the webapp runs on
API_ENDPOINT=http://0.0.0.0:9678    # the endpoint of the API server
```

To import environment variables in the Webapp, add them to the `nextConfig` in `next.config.mjs`.

To run the webapp:

```bash
make start-webapp
```

---

## Testing

Run all the tests available in the project with:

```bash
make test
```
