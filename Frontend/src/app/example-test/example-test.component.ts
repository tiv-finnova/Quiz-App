import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example-test',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './example-test.component.html',
  styleUrls: ['./example-test.component.css']
})
export class ExampleTestComponent {
  currentStep = 0;
  @Output() examStarted = new EventEmitter<boolean>();
  constructor(private router: Router) {}

  steps = [
    { title: 'Frage 1 Basics', text: 'Wofür braucht man ein Computerprogramm?', type: 'multiple-choice', options: ['Zum Aufladen des Akkus', 'Um Befehle an den Computer zu geben', 'Zum Reinigen der Tastatur'], answer: '', correctAnswer: 'Um Befehle an den Computer zu geben' },
    { title: 'Frage 2 Basics', text: 'Was macht ein Applikationsentwickler?', type: 'multiple-choice', options: ['Er baut Computer zusammen', 'Er programmiert Software oder Apps', 'Er repariert Drucker'], answer: '', correctAnswer: 'Er programmiert Software oder Apps' },
    { title: 'Frage 3 Basics', text: 'Was ist eine Programmiersprache?', type: 'multiple-choice', options: ['Eine Sprache, die Computer verstehen', 'Eine Sprache, die man für die Kommunikation mit Kunden benutzt', 'Eine Sprache, die Apps herunterladen kann'], answer: '', correctAnswer: 'Eine Sprache, die Computer verstehen' },
    { title: 'Frage 4 Basics', text: 'Was bedeutet "debuggen"?', type: 'multiple-choice', options: ['Einen Computer von Viren befreien', 'Fehler im Programm finden und beheben', 'Einen Computer schneller machen'], answer: '', correctAnswer: 'Fehler im Programm finden und beheben' },
    { title: 'Frage 5 Basics', text: 'Welches dieser Programme ist ein Beispiel für eine Software?', type: 'multiple-choice', options: ['Ein Handy-Ladekabel', 'Microsoft Excel', 'Ein Drucker'], answer: '', correctAnswer: 'Microsoft Excel' }
  ];

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  finishExam() {
    this.currentStep = 0;


    this.examStarted.emit(false);
    this.router.navigateByUrl('Dashboard');

    this.steps.forEach((step, i) => {
      if (step.answer === step.correctAnswer) {
        console.log("Frage " + (i + 1) + " richtig beantwortet");
      }
    });
  }
}





/*
Lvl 1

Wofür braucht man ein Computerprogramm?
a) Zum Aufladen des Akkus
b) Um Befehle an den Computer zu geben (richtige Antwort)
c) Zum Reinigen der Tastatur

Was macht ein Applikationsentwickler?
a) Er baut Computer zusammen
b) Er programmiert Software oder Apps (richtige Antwort)
c) Er repariert Drucker

Was ist eine Programmiersprache?
a) Eine Sprache, die Computer verstehen (richtige Antwort)
b) Eine Sprache, die man für die Kommunikation mit Kunden benutzt
c) Eine Sprache, die Apps herunterladen kann

Was bedeutet "debuggen"?
a) Einen Computer von Viren befreien
b) Fehler im Programm finden und beheben (richtige Antwort)
c) Einen Computer schneller machen

Welches dieser Programme ist ein Beispiel für eine Software?
a) Ein Handy-Ladekabel
b) Microsoft Excel (richtige Antwort)
c) Ein Drucker


Lvl 2
Was macht eine "for-Schleife" in einem Programm?
a) Sie führt einen Codeblock mehrmals aus. (richtige Antwort)
b) Sie entscheidet zwischen zwei Möglichkeiten.
c) Sie beendet ein Programm.

Wofür braucht man "Kommentare" im Code?
a) Um den Code für den Computer verständlicher zu machen.
b) Um anderen Menschen zu erklären, was der Code macht. (richtige Antwort)
c) Um den Code schneller auszuführen.

Was ist ein Algorithmus?
a) Eine Schritt-für-Schritt-Anleitung zur Lösung eines Problems. (richtige Antwort)
b) Ein spezielles Programm zum Debuggen.
c) Eine Liste von Zahlen in einer Tabelle.

Was passiert, wenn eine Variable überschrieben wird?
a) Der alte Wert wird gelöscht, und die Variable bekommt einen neuen Wert. (richtige Antwort)
b) Die Variable wird doppelt gespeichert.
c) Die Variable funktioniert nicht mehr.

Welche der folgenden Aussagen trifft auf eine Bedingung ("if") zu?
a) Sie wird nur ausgeführt, wenn die angegebene Bedingung wahr ist. (richtige Antwort)
b) Sie startet das Programm neu, wenn eine Bedingung falsch ist.
c) Sie speichert Daten automatisch.


Lvl 3
Welche dieser Aussagen beschreibt eine Schleife in einem Programm richtig?
a) Eine Schleife speichert Daten.
b) Eine Schleife führt eine Aufgabe wiederholt aus, bis eine Bedingung erfüllt ist. (richtige Antwort)
c) Eine Schleife startet den Computer neu.

Was bedeutet "if-else" in einer Programmiersprache?
a) Es erlaubt, zwischen zwei Bedingungen zu wählen. (richtige Antwort)
b) Es speichert Zahlen in einer Liste.
c) Es wiederholt eine Aufgabe mehrfach.

Was ist der Zweck einer Variable in einem Programm?
a) Sie speichert Werte, die im Programm genutzt werden können. (richtige Antwort)
b) Sie erstellt neue Programme.
c) Sie schaltet das Programm aus.

Welche Programmiersprache eignet sich gut für Einsteiger?
a) Python (richtige Antwort)
b) C++
c) Assembly

Was passiert, wenn ein Programm einen "Syntaxfehler" enthält?
a) Das Programm wird langsamer.
b) Das Programm kann nicht ausgeführt werden. (richtige Antwort)
c) Das Programm löscht alle Daten.

Lvl 4
Was bedeutet "DRY" in der Softwareentwicklung?
a) "Don't Repeat Yourself" – Code sollte so geschrieben werden, dass Wiederholungen vermieden werden. (richtige Antwort)
b) "Develop Rapidly Yourself" – schnelleres Schreiben von Code.
c) "Data Redundancy Yield" – das Duplizieren von Daten.

Was ist ein Array, und wofür wird es verwendet?
a) Ein Array ist eine Art von Schleife, die Code wiederholt.
b) Ein Array ist eine strukturierte Sammlung von Daten, die denselben Typ haben. (richtige Antwort)
c) Ein Array speichert Fehler, die ein Programm findet.

Worin unterscheidet sich eine Funktion von einer Methode?
a) Eine Methode gehört zu einem Objekt oder einer Klasse, während eine Funktion unabhängig ist. (richtige Antwort)
b) Eine Funktion kann keine Parameter haben, eine Methode schon.
c) Eine Methode wird nur in Datenbanken verwendet, eine Funktion nicht.

Was ist der Hauptvorteil der Verwendung einer Datenbank in einer Anwendung?
a) Daten können einfach gesucht, gespeichert und verarbeitet werden. (richtige Antwort)
b) Es reduziert den Speicherbedarf auf dem Computer.
c) Es verhindert, dass Fehler im Programm auftreten.

Was macht eine API (Application Programming Interface)?
a) Sie verbindet verschiedene Programme oder Systeme miteinander. (richtige Antwort)
b) Sie sorgt dafür, dass Programme schneller ausgeführt werden.
c) Sie speichert Daten aus einem Programm in der Cloud.
*/

