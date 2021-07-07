jfddr3 - generowanie statycznych stron (SSG)

Dzisiaj zapoznamy się z jednym z narzędzi do generowania statycznych stron, jakim jest Gatsby i spróbujemy stworzyć i opublikować prostą stronę z jego użyciem.

Dokumentację znajdziemy tutaj: https://www.gatsbyjs.com/docs/tutorial/

# Challenge 1 - przygotowania (zainstaluj Gatsby CLI oraz załóż konto na Gatsby Cloud)

1. Polecenie `npm install -g gatsby-cli`. Jeżeli będzie problem z prawami dostępu - spróbuj użyć `sudo npm install -g gatsby-cli`
1. Załóż konto na: https://www.gatsbyjs.com/dashboard/signup/

# Challenge 2 - tworzymy podstawowy projekt

Cały opis tego etapu znajdziesz tutaj: https://www.gatsbyjs.com/docs/tutorial/part-1/

1. Polecenie `gatsby new`. Większość odpowiedzi w command line poza nazwą projektu zostawiamy z domyślnymi wartościami. 
1. `cd nazwa-katalogu-z-projektem`
1. `gatsby develop` (odpowiednik `npm start` w Gatsby)
1. (Opcjonalnie) Można również podejrzeć GraphQL Schema tutaj: http://localhost:8000/___graphql
1. Zakładamy nowe repo na GitHub
1. Push'ujemy projekt do tego repo
1. Łączymy repo i Gatsby Cloud (dokładne instrukcje są w linku powyżej)

# Challenge 3 - więcej podstron.

Chcemy w tym zadaniu dodać kilka następnych stron.

Treść zadania:
- dodaj co najmniej 2 podstrony z osobnymi URL. Mogą to być strony `about` i `blog`, jak w oficjalnym tutorialu, ale możemy zrobić też inne.
- Dodaj navbar, który by umożliwiał nawigację pomiędzy stronami.

**UWAGA:** Wszystkie pliki w katalogu `pages` w Gatsby będą dostępne jako podstrony.
Jenak z Gatsby ważne jest to, żeby nie nazywać komponentów zgodnie z oficjalną konwencją (np. `NewsPage.jsx`), tylko `news-page.jsx`, chyba że chcemy mieć URL w postaci: `https://my-gatsby-site.gtsb.io/NewsPage`, zamiast `https://my-gatsby-site.gtsb.io/news-page`

**UWAGA 2:** Gatsby umożliwia cache'owanie i wczytywanie stron jeszcze zanim w nie klikniemy. Jednak, aby było to możliwe,
zamiast `<a>` musimy użyć `<Link>` z Gatsby. Importujemy tak: `import { Link } from 'gatsby'`. Używamy tak: `<Link to="/about">O nas</Link>`

