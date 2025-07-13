# Deno Katsu Recipe Server

This is a simple Deno project that serves recipes. It has two main routes: one for a specific recipe (Tonkatsu) and another to fetch a random recipe from TheMealDB API.

## Features

- Serves a predefined Tonkatsu recipe on the root path (`/`).
- Fetches and displays a random recipe from TheMealDB API on the `/random` path.
- Built with Deno.

## Getting Started

### Prerequisites

Make sure you have Deno installed on your system. If not, you can install it by following the instructions on the [official Deno website](https://deno.land/).

### Setup

1. Open in Firebase Studio:

[![Open in Firebase Studio](https://cdn.firebasestudio.dev/btn/open_dark_32.svg)](https://studio.firebase.google.com/import?url=https://github.com/z66n/deno-katsu) 

2. Install `deployctl`

```
deno task install
```

3. Build and Deploy to Deno Deploy

```
deno task build
deno task deploy:staging
deno task deploy:prod
```
