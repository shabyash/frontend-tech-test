<template>
<v-container class="convertor">
    <v-layout row class="currency">
    <v-layout column>
        <div>
            <h3 class="base">Base</h3>
            <currency-selection-vue @select-changed="selectionChanged" :countries="countries" /> 
        </div>
        <div> 
            <h3 class="base">Target</h3>
            <currency-selection-vue  @select-changed="targetChanged" :countries="countries" />  
        </div>
        <div>
            <h3 class="amount">Amount</h3>
            <input type="text" v-model="amount"/>
        </div>    
        <div>
            <v-btn elevation="2"  x-large @click="calculateCurrency( amount)" class="switch-btn"> Switch </v-btn>
        </div>
    </v-layout>
    <div>
        {{amount}} {{curr1}} = <h3> {{convertedAmount}} {{curr2}}</h3>
    </div>

    </v-layout>
    <v-layout row class="labels-currency">
        <div class="country-label" :key="name" v-for="(value, name) in currenciesRate">
             <h3 :class="{'active' : curr2 === name}">{{name}}</h3>
             <h5 > {{value}} </h5>
        </div>
    </v-layout>
</v-container>
</template>

<script>
import currencyRate from "../assets/currencies.json";
import CurrencySelectionVue from './CurrencySelection.vue';
export default {
    data() {
        return {
            countries:["CAD","HKD","ISK","PHP","DKK","HUF","CZK","AUD","RON","SEK","IDR",
            "INR","BRL","RUB","HRK","JPY","THB","CHF","SGD","PLN","BGN","TRY","CNY","NOK",
            "NZD","ZAR","USD","MXN","ILS","GBP","KRW","MYR"],
            currenciesRate: currencyRate,
            convertedAmount: 1,
            amount: 1,
            curr1: 'GBP',
            curr2: 'GBP',
            showResult: false

        }
    },
    components: {
        CurrencySelectionVue
    },
    methods: {
        selectionChanged (selcountry) {
            this.curr1 = selcountry
        },
        targetChanged (selcountry) {
            this.curr2 = selcountry
        },
        calculateCurrency (amount){
            console.log('value: ' + amount*currencyRate[this.curr2]/currencyRate[this.curr1]);
            this.convertedAmount = amount*currencyRate[this.curr2]/currencyRate[this.curr1];                
        }
    }

}
</script>

<style>
input[type='text'] {
    padding: 5px;
    margin-left: 12px;
}
.active {
    color: red;
    text-shadow: 2px 0px 14px #ff0000;
}
.convertor {
    display: flex;
}
.currency {
    width: 18rem;
}
button {
    margin-top: 10px;
}
.amount {
    display: inline-flex;
}
.select-country {
    width: 62px;
    height: 30px;
    margin-top: 25px;
    border-radius: 5px;
    display: inline;
}
.base {
    margin-right: 32px;
    display: inline-flex;
}
v-flex {
    display: block;
}
.switch-btn {
    display: block;
    margin: 12px 0px 12px 184px;    
    background-color: indianred;
    height: 25px;
    width: 80px;
    padding-top: 6px;
}
.labels-currency {
    display: flex;
    width: 1000px;
    flex-flow: wrap;
    margin-left: 28px;
}
.country-label {
    padding: 18px 18px 0px 18px;
}
v-layout {
    background-color: lightgrey;
}
</style>