### Flow

##### Antes de empezar cualquier daily:

- Parado en **'master'**: `git pull`, para traer los ultimos cambios.
- Crear branch para la nueva tarea: `git checkout -b 'nombre'`.
- Trabajar normalmente sobre la nueva rama
- Pushear a la nueva rama.
- Pedir pull request a **'master'** el cual tienen que aceptar al menos dos personas.
- En el caso de que haya pasado mucho tiempo desde que se empezo la tarea o si otra persona hizo un PullRequest :

```sh
$ git checkout master
$ git pull
```

> Esto es para mantener tu master actualizado al último cambio.

- Despues de algun cambio **importante** o de un avance importante en el proyecto pullear los cambios (ya testeados) a **'master'**, con todo el grupo de trabajo presente.

### Branches

- Idioma de nombres: **Inglés**.
- Formato de nombres : `'<author>/<branch-type>_<branch-name>'` .
  > Ejemplo: `$ git checkout -b pepe/feat_navbar-searchbar`
- Usar nombres _descriptivos_ (recordar que cualquiera puede acceder a los nombres de las branches).
- `CUIDADO CON LA MASTER!`

### Commits

- Idioma de nombres: **Español**.
- Formato de nombres : `'<type>(<scope>): <subject> '`
  > Ejemplo: `$ feat(navbar): agregue una searchbar para buscar productos por nombre`
- Usar nombres _descriptivos_ (recordar que cualquiera puede acceder a los nombres de los commits).

# Sintáxis y Código

### Identación

- Antes de pushear cualquier cambio asegurarse de que el codigo este identado con el estandar elegido por el grupo. `(Prettier)`
- Comillas simples en todo lugar menos en los textos.

### Scaffolding

- **Idioma**: Inglés.
- **Carpetas**: Todo en **snake_case**.
- **Archivos**: Siempre con **snake_case** (excepciones react components, reducer etc..).

### Code Syntax

- **Idioma**: Inglés.
- Funciones, variables y modelado en **camelCase**, costantes fijas en **UPPERCASE** y **Snake_Case** (puede haber excepciones, por ejemplo redux actions)
- Utilizar nombres **descriptivos** para las variables.
- No usar tildes ni caracteres especiales.
- `**Comentar**` el código de forma descriptiva y concisa con la menor cantidad de palabras posible, ya que todos vamos a tener que leer los comentarios de los otros.

### Documentacion

- 👾 https://gist.github.com/henry-labs/fde7766161fb098a8e4edc04cc4caa97 👾

- https://dev.to/i5han3/git-commit-message-convention-that-you-can-follow-1709
- https://codingsight.com/git-branching-naming-convention-best-practices/
