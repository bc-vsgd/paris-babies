# Paris top babies names

Exercise made during fullstack developper bootcamp training provided by [Le Reacteur](https://www.lereacteur.io/).  
Fourth part: [React](https://react.dev/blog/2023/03/16/introducing-react-dev).


This application, based on a former exercise, allows to get the most given babies first names in Paris. You select the year (since 2004), the gender and the number of results to display. The total births number is also displayed.  

Test yourself on [Netlify](https://lively-treacle-22f59f.netlify.app/).


## Learnings put into practice

- HTTP requests: the data is provided by the [Ville de Paris dataset](https://opendata.paris.fr/explore/dataset/liste_des_prenoms/information/?disjunctive.annee&disjunctive.prenoms), retrieved with [Axios](https://axios-http.com/).
- Page structure made with [React](https://react.dev/blog/2023/03/16/introducing-react-dev) components.
- Dynamic results display with [React](https://react.dev/blog/2023/03/16/introducing-react-dev) ```props``` and ```states```.
- Responsive page, mobile first, from smallest to greatest screen with [Bootstrap](https://getbootstrap.com/) breakpoints (576 px, 768 px, 992 px, 1200 px).

  
## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
