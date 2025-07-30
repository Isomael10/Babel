const services = [
  {
    slug: 'gardiennage-surveillance',
    title: 'Gardiennage & Surveillance',
    brief: 'Service de gardiennage professionnel pour la protection de vos locaux 24h/24.',
    description: `Notre service de gardiennage et de surveillance assure la protection continue des biens, des personnes et des installations, grâce à une équipe d’agents qualifiés, formés et encadrés. Présents 24h/24, nos agents effectuent des missions de contrôle d’accès, de rondes de sécurité, de gestion des incidents et de surveillance active. Équipés de matériels adaptés et encadrés selon une démarche qualité rigoureuse, ils garantissent une sécurité fiable, discrète et adaptée aux besoins spécifiques de chaque site.`,
    characteristics: [
      'Rondes de sécurité programmées',
      'Surveillance périmétrique',
      'Rapport détaillé quotidien',
      'Contrôle d’accès strict',
      'Intervention immédiate',
      'Formation continue des agents'
    ],
    advantages: [
      'Réduction des risques d’intrusion',
      'Protection 24h/24 et 7j/7',
      'Personnel qualifié et certifié',
      'Intervention rapide en cas d’incident',
      'Tranquillité d’esprit garantie'
    ],
    info: {
      responseTime: 'Moins de 15 minutes',
      price: 'Sur devis '
    }
  },
  {
    slug: 'videosurveillance',
    title: 'Vidéosurveillance',
    brief: 'Installation et monitoring de systèmes de vidéosurveillance haute définition.',
    description: `Nous proposons l’installation de caméras HD couplées à un centre de supervision 24/7. Accédez à vos flux en direct ou en replay, avec alertes instantanées en cas de mouvement suspect.`,
    characteristics: [
      'Caméras HD & 4K',
      'Monitoring 24/7',
      'Serveur dédié sécurisé',
      'Accès à distance',
      'Alertes en temps réel',
      'Archivage vidéo jusqu’à 30 jours'
    ],
    advantages: [
      'Contrôle permanent de votre site',
      'Réduction des coûts de sécurité humaine',
      'Preuves vidéo exploitables',
      'Installation clé en main',
      'Maintenance incluse'
    ],
    info: {
      responseTime: 'Installation sous 72h',
      price: 'Sur devis'
    }
  },
  {
    slug: 'protection-rapprochee',
    title: 'Protection Rapprochée',
    brief: 'Service de protection personnelle pour VIP et personnalités.',
    description: `Notre service de garde rapprochée offre une protection rapprochée et personnalisée aux personnes exposées à des risques particuliers. Nos agents de protection, discrets, expérimentés et hautement formés, assurent la sécurité physique de nos clients dans tous leurs déplacements, événements ou lieux de résidence. Grâce à une évaluation précise des menaces et à une planification rigoureuse, nous garantissons une protection efficace, adaptée au profil et au niveau de risque de chaque client.`,
    characteristics: [
      'Agent qualifié',
      'Discrétion absolue',
      'Disponibilité 24/7'
    ],
    advantages: [
      'Protection personnalisée',
      'Escort VIP discret',
      'Surveillance rapprochée'
    ],
    info: {
      responseTime: 'Moins de 30 minutes',
      price: 'Sur devis'
    }
  },
  {
    slug: 'securite-evenements',
    title: 'Sécurité d’Événements',
    brief: 'Sécurisation d’événements publics et privés de toute envergure.',
    description: `Notre service de sécurité événementielle assure la protection, le bon déroulement et le contrôle des accès lors de tout type d’événement (concerts, conférences, cérémonies, manifestations publiques ou privées). Nos agents qualifiés sont formés pour gérer les flux de personnes, prévenir les troubles, intervenir rapidement en cas d'incident et garantir la sérénité des participants. Nous mettons en place un dispositif adapté à chaque événement, en coordination avec les organisateurs et les autorités si nécessaire.`,
    characteristics: [
      'Filtrage d’accès',
      'Gestion de foule',
      'Coordination équipe'
    ],
    advantages: [
      'Gestion sécurisée des foules',
      'Contrôle d’accès optimal',
      'Support logistique'
    ],
    info: {
      responseTime: 'Planification sous 48h',
      price: 'Sur devis'
    }
  },
  {
    slug: 'transport-securise',
    title: 'Transport Sécurisé',
    brief: 'Transport de valeurs et escortes sécurisées pour vos biens précieux.',
    description: `Notre service de transport sécurisé assure l’acheminement de biens sensibles, documents confidentiels ou valeurs, dans des conditions optimales de sécurité. Grâce à des véhicules adaptés, des itinéraires planifiés et des agents formés à la prévention des risques et aux protocoles d’escorte, nous garantissons une protection totale pendant tout le trajet. Ce service s’adresse aux entreprises, institutions ou particuliers souhaitant sécuriser leurs transferts en toute discrétion et fiabilité.`,
    characteristics: [
      'Véhicule blindé',
      'Escorte armée',
      'Traçabilité GPS'
    ],
    advantages: [
      'Protection optimale',
      'Déplacement sécurisé',
      'Suivi en temps réel'
    ],
    info: {
      responseTime: 'Disponible sur demande',
      price: 'Sur devis'
    }
  },
  {
    slug: 'intervention-urgence',
    title: 'Intervention d’Urgence',
    brief: 'Service d’intervention rapide en cas d’alarme ou d’urgence.',
    description: `Notre équipe d’intervention se mobilise immédiatement pour toute alerte ou situation critique, afin de sécuriser les lieux et limiter les risques.`,
    characteristics: [
      'Temps de réponse rapide',
      'Équipe spécialisée',
      'Liaison sécurisée'
    ],
    advantages: [
      'Intervention immédiate',
      'Assistance professionnelle',
      'Réponse 24/7'
    ],
    info: {
      responseTime: 'Moins de 15 minutes',
      price: 'Sur devis'
    }
  }
]

export default services