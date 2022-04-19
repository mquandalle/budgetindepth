export default {
	name: 'administrations',
	children: [
		{
			name: 'etat',
			value: 589.3
		},
		{
			name: 'collectivités locales',
			value: 269.8
		},
		{
			name: 'sécurité sociale',
			value: 661.3,
			children: [
				{
					name: 'charges de gestion courante',
					value: 1.4306
				},
				{
					name: 'CNAM Maladie',
					value: 228.1
				},
				{
					name: 'CNAM AT-MP',
					value: 9.8
				},
				{
					name: 'CNAF',
					value: 35.9
				},
				{
					name: 'CNAV',
					value: 139.6,
					description:
						"La Caisse nationale d'assurance vieillesse est un organisme français de sécurité sociale qui gère la retraite de base des salariés du secteur privé, des travailleurs indépendants, des contractuels de droit public et des artistes-auteurs, ainsi que la retraite complémentaire des travailleurs indépendants."
				},
				{
					name: 'FSV',
					value: 15.1027
				},
				{
					name: 'Cades',
					value: 4.7234
				},
				{
					name: 'UNEDIC',
					value: 0.4957
				},
				{
					name: 'CNSA',
					value: 0.6624
				},
				{
					name: 'CPSTI',
					value: 0.0372
				},
				{
					name: 'CCMSA',
					value: 1.9576
				},
				{
					name: 'ENIM',
					value: 0.0017
				},
				{
					name: 'CAVIMAC',
					value: 0.0063
				},
				{
					name: 'CARMF',
					value: 0.0001
				}
			]
		}
	]
};
