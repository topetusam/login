# Documentación de la API

## Endpoints de Autenticación

### 1. Login con Google
- **URL**: `/auth/google`
- **Método**: `GET`
- **Descripción**: Inicia el proceso de autenticación con Google. Redirige al usuario a la página de inicio de sesión de Google.
  
### 2. Callback de Google
- **URL**: `/auth/google/callback`
- **Método**: `GET`
- **Descripción**: Recibe la respuesta de Google después de la autenticación. Si la autenticación es exitosa, redirige a la página de inicio (`/home`).

### 3. Login con Discord
- **URL**: `/auth/discord`
- **Método**: `GET`
- **Descripción**: Inicia el proceso de autenticación con Discord. Redirige al usuario a la página de inicio de sesión de Discord.

### 4. Callback de Discord
- **URL**: `/auth/discord/callback`
- **Método**: `GET`
- **Descripción**: Recibe la respuesta de Discord después de la autenticación. Si la autenticación es exitosa, redirige a la página de inicio (`/home`) y devuelve el nombre de usuario.

### 5. Login con Facebook
- **URL**: `/auth/facebook`
- **Método**: `GET`
- **Descripción**: Inicia el proceso de autenticación con Facebook. Redirige al usuario a la página de inicio de sesión de Facebook.

### 6. Callback de Facebook
- **URL**: `/auth/facebook/callback`
- **Método**: `GET`
- **Descripción**: Recibe la respuesta de Facebook después de la autenticación. Si la autenticación es exitosa, redirige a la página de inicio (`/home`).

## Ejemplo de Respuesta

### 1. Respuesta de la Callback de Discord
```json
{
  "displayName": "Nombre de Usuario"
}
