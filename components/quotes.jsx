import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView} from 'react-native';
import { useEffect, useState } from 'react';
import style from './style'


export default function Quotes(){

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
      fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => setQuotes(data))
    }, []);

    const size = 20
    const motivation = quotes.slice(0, size)
    const quotesCards = motivation.map(quote => 
        <View> 
          <Text key={quote.id} style={style.quote}>"{quote.text}" {'\n'}-{quote.author}</Text>
        </View>)

    return (
        <ScrollView>
            <Text>
              {quotesCards}
            </Text>
        </ScrollView>
    )
}
