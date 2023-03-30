# TailwardenFrontendChallenge

This repository contains the code for the code Tailwarden [challenge](https://github.com/tailwarden/frontend-challenge)

Tools that I use.

Nx for handle correctly a mono repo, in this mono repo I have mainly two projects, a nextJs app `dashboard` and a ui library where you can find the custom components `ui-lib` this in order to have a testable component web as storybook.

Other tools that I use :

- tanstack/react-query
- recharts
- styled-components

## Development server

Run `yarn dev` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Run `yarn storybook` for a storybook server. Navigate to http://localhost:4400/. The app will automatically reload if you change any of the source files.

There you can find the Card and the Dropdown Component, I don't generate any storybook story for the data visualizator, if you would like to try it [rechart](https://recharts.org/en-US/examples)

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.
