# Les aventures de Jean Claude, le sac à dos infini

PWA ([Progressive Web App](https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps)) pour le jeu _Les aventures de Jean Claude_, générée par [Cecil](https://cecil.app).

## Pré-requis

1. PHP 8.1
2. `cecil.phar` : <https://cecil.app/download/>

## Structure du projet

- Paramétrage de l'App : `cecil.yml`
- Liste des objets : `data/sac.csv`
- Templates ([Twig](https://twig.symfony.com)) : `layouts/`
- Web App générée : `_site`

## Aperçu local

Exécuter la commande suivante dans un terminal :

```bash
php cecil.phar serve
```

Puis ouvrir un navigateur web à l'adresse <http://localhost:8000>.

## Génération du site

Exécuter la commande suivante dans un terminal :

```bash
php cecil.phar build
```

Puis copier le contenu du dossier `_site` sur le serveur web.
