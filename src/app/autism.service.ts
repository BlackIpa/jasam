export class AutismService {
	autismSubpage = {
		autism: {
			name: 'CZYM JEST AUTYZM',
			title: 'Czym jest autyzm?',
			text: 'Współczesne metody diagnostyczne pozwalają dobremu specjaliście na bardzo wczesne wykrycie autyzmu, bo już u dzieci w wieku od 12 do 18 miesiąca życia. Badania pokazują jednak, że w warunkach polskich dzieci otrzymują diagnozę zazwyczaj pomiędzy 4 a 6 rokiem życia. Zdarza się również, że autyzm diagnozowany jest u młodzieży i dorosłych. Wynika to głównie z wciąż niskiej świadomości na temat  zaburzenia oraz prawidłowego rozwoju dziecka, zarówno wśród rodziców jak i specjalistów. Powstające programy badań przesiewowych pozwalające na wczesne wykrycie niepokojących symptomów w rozwoju dziecka, przynoszą nadzieję na zmianę sytuacji w Polsce na lepsze.\n\nIm wcześniej tym lepiej!\n\nWczesna diagnoza zaburzeń ze spektrum autyzmu oznacza wczesne rozpoczęcie terapii. Pozwala to na osiągnięcie lepszych rezultatów, szybsze nauczenie dziecka jak funkcjonować w społeczeństwie i jak uczyć się poprzez nawiązywanie relacji z innymi ludźmi. Szybko rozpoczęta terapia nie tylko przynosi korzyści dla dziecka, ale jak pokazują badania, zwiększa też poczucie dobrostanu u rodziców i zmniejsza odczuwany przez nich stres.\n\nWięcej informacji o tym jak rozpoznać pierwsze symptomy autyzmu znajdziesz na badabada.pl, stronie projektu Fundacji Synapsis.',
			nextLink: ['diagnoza']
		},
		diagnosis: {
			name: 'DIAGNOZA',
			title: 'Diagnoza',
			text: 'This is a subpage about diagnosis',
			previousLink: ['autyzm'],
			nextLink: ['symptomy']
		},
		symptoms: {
			name: 'SYMPTOMY',
			title: 'Symptomy',
			text: 'Symptoms will be described here',
			previousLink: ['autyzm','diagnoza'],
			nextLink: ['oferta']
		}
	}

	sendCorrectAutismPart(part: string) {
		if (part == 'autyzm') {
			return this.autismSubpage.autism;
		} else if (part == 'diagnoza') {
			return this.autismSubpage.diagnosis;
		} else if (part == 'symptomy') {
			return this.autismSubpage.symptoms;
		}
	}
}