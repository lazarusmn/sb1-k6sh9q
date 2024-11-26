import { Observable } from '@nativescript/core';

interface FAQ {
    question: string;
    answer: string;
    isVisible: boolean;
}

interface Testimonial {
    quote: string;
    name: string;
    role: string;
}

export class HomeViewModel extends Observable {
    private _balance: string = "R 0.00";
    private _transactions: Array<any> = [];
    private _testimonials: Array<Testimonial> = [];
    private _faqs: Array<FAQ> = [];

    constructor() {
        super();
        this.loadMockData();
    }

    get balance(): string {
        return this._balance;
    }

    get transactions(): Array<any> {
        return this._transactions;
    }

    get testimonials(): Array<Testimonial> {
        return this._testimonials;
    }

    get faqs(): Array<FAQ> {
        return this._faqs;
    }

    onSendTip() {
        console.log("Send tip tapped");
    }

    onReceiveTip() {
        console.log("Receive tip tapped");
    }

    onScanQR() {
        console.log("Scan QR tapped");
    }

    onHomeTab() {
        console.log("Home tab tapped");
    }

    onProfileTab() {
        console.log("Profile tab tapped");
    }

    private loadMockData() {
        // Balance
        this._balance = "R 250.00";

        // Transactions
        this._transactions = [
            {
                type: "Received Tip",
                amount: "R 50.00",
                date: "2024-03-20 14:30"
            },
            {
                type: "Sent Tip",
                amount: "R 20.00",
                date: "2024-03-20 12:15"
            },
            {
                type: "Withdrawal",
                amount: "R 100.00",
                date: "2024-03-19 16:45"
            }
        ];

        // Testimonials
        this._testimonials = [
            {
                quote: "This app has made tipping so much easier for my customers!",
                name: "John Smith",
                role: "Restaurant Owner"
            },
            {
                quote: "I love how I can receive tips instantly without carrying cash.",
                name: "Sarah Johnson",
                role: "Service Provider"
            },
            {
                quote: "The QR code feature is brilliant and so easy to use.",
                name: "Michael Brown",
                role: "Car Guard"
            }
        ];

        // FAQs
        this._faqs = [
            {
                question: "How do I receive tips?",
                answer: "Simply show your unique QR code to the tipper or share your profile link.",
                isVisible: false
            },
            {
                question: "How quickly can I withdraw my tips?",
                answer: "Tips can be withdrawn instantly to your linked bank account or mobile wallet.",
                isVisible: false
            },
            {
                question: "Is there a minimum tip amount?",
                answer: "The minimum tip amount is R5 to ensure transaction efficiency.",
                isVisible: false
            }
        ];

        // Notify property changes
        this.notifyPropertyChange('transactions', this._transactions);
        this.notifyPropertyChange('testimonials', this._testimonials);
        this.notifyPropertyChange('faqs', this._faqs);
    }
}