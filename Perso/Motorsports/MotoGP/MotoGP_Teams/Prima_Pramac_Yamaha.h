<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prima Pramac Yamaha</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
            color: #0001fb;
            font-family: Arial, sans-serif;
        }

        header {
            text-align: center;
            background-color: #7102c3;
            color: white;
            padding: 20px;
            font-size: 24px;
            font-weight: bold;
        }

        main {
            padding: 20px;
            text-align: center;
        }

        .team-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin: 20px auto;
            max-width: 900px;
        }

        .team-card {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
            width: 100%;
        }

        .team-logo {
            max-width: 100%;
            height: auto;
            border: 2px solid #002d54;
            border-radius: 5px;
            margin-bottom: 20px;
        }

        .team-details {
            text-align: left;
            width: 100%;
        }

        .team-details h2 {
            color: #eb100a;
            font-size: 22px;
            margin-bottom: 15px;
        }

        .team-details ul {
            list-style: none;
            padding: 0;
            font-size: 18px;
            line-height: 1.6;
        }

        .team-details ul li {
            margin: 8px 0;
            color: #7102c3;
        }

        .pilots {
            text-align: center;
            margin-top: 40px;
        }

        .pilots ul {
            list-style: none;
            padding: 0;
        }

        .pilots ul li {
            margin: 20px 0;
        }

        .pilots a {
            text-decoration: none;
            color: #7102c3;
            font-size: 18px;
            font-weight: bold;
        }

        .pilots a:hover {
            text-decoration: underline;
            color: #eb100a;
        }

        .button-container {
            text-align: center;
            margin-top: 20px;
            position: static;
            bottom: 20px;
            background-color: white;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .btn-link {
            display: inline-block;
            padding: 8px;
            background-color: transparent;
            color: #0001fb;
            text-decoration: none;
            border-radius: 30px;
            transition: background 0.3s ease;
            border: 1px solid #000; /* Added border for visibility */
        }

        .btn-link:hover {
            background-color: rgba(0, 0, 0, 0.2);
            color: #0001fb;
        }

        footer {
            text-align: center;
            padding: 15px;
            background-color: #f1f1f1;
            font-size: 14px;
            font-weight: bold;
            box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
        }

        footer a {
            color: #002d54;
            text-decoration: none;
        }

        footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <header>
        <h1>Prima Pramac Yamaha</h1>
    </header>

    <main>
        <section class="team-info">
            <div class="team-card">
                <img src="https://resources.motogp.pulselive.com/photo-resources/2025/02/10/9ba24212-6782-497d-9f49-c3d3c2e25371/zpqaQESX.png?width=200"
                     alt="Logo Prima Pramac Yamaha" class="team-logo">
            </div>
            <div class="team-details">
                <h2>Informations sur l'équipe</h2>
                <ul>
                    <li><strong>Entrée en Championnat :</strong> 2002</li>
                    <li><strong>Titres Mondiaux Écuries :</strong> 1</li>
                    <li><strong>Victoires :</strong> 20</li>
                    <li><strong>Podiums :</strong> 75</li>
                    <li><strong>Pole Positions :</strong> 27</li>
                    <li><strong>Fastest Laps :</strong> 24</li>
                    <li><strong>Machine :</strong> Yamaha YZR-M1</li>
                </ul>
            </div>
        </section>

        <section class="pilots">
            <h2>Pilotes</h2>
            <ul>
                <li><a href="Jack_Miller.html">Jack Miller #43</a></li>
                <li><a href="Miguel_Oliveira.html">Miguel Oliveira #88</a></li>
            </ul>
        </section>
    </main>

    <div class="button-container">
        <a href="Teamsindex.html" class="btn-link">← Retour à l'accueil</a>
    </div>

    <footer>
        <p>&copy; 2025 MotoGP Info. Tous droits réservés.</p>
        <a href="https://www.motogp.com/fr/teams/motogp/prima-pramac-yamaha/598ccfb2-e0f1-4ad7-92b7-00ec9238a72c?tab=news" target="_blank">Visitez la page officielle de cette équipe du MotoGP</a><br>
        <a href="https://www.motogp.com/fr/world-standing/2025/motogp/team-standings" target="_blank">Visitez les résultats de cette équipe</a><br>
    </footer>

    <script src="script.js" defer></script>
</body>
</html>

