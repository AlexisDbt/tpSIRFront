# Application doodle

Ce projet est un projet Universitaire de Master 1 MIAGE, répliquant le fonctionnement d'une application de type de rendez-vous comme Doodle. Le projet comporte deux parties :
Le frontend développé en Angular
Le backend en Java

## Frontend

Angular a permis de concevoir une application web simple, et bien structuré. Le frontend communique avec l'API rest mise en place par le Backend.

Avec toutes les données récupées, on alimente les différentes pages, tableaux de l'application avec des requêtes GET ou POST pour l'envoie de données.

Nous avons également utilisé Angular Material afin de rendre tout cela plus esthétique.

## Backend

Le frontend donc appelle l'api REST du backend afin de récupérer les informations. Le repo du backend est disponible ici : https://github.com/AlexisDbt/tpjpa2019sir

## Fonctionnalités

Via le menu en haut à gauche de l'application, on peut :
  * Accéder à tous les utilisateurs
  * Un utilisateur peut s'inscrire à une réunion en y précisant ces informations personnelles
  * Créer un nouveau sondage pour choisir la date d'une future réunion (Non finit)
  * Créer une nouvelle réunion en y ajoutant les informations de cette dernière
  * Accéder à la liste de toutes les réunions et voir les participants de chaque réunion
