// import { useState, useEffect } from 'react'
// import { supabase } from './lib/supabase'
// import Auth from './components/Auth'
// import Account from './components/Account'
import { View, Text } from 'react-native'
// import { Session } from '@supabase/supabase-js'

// export default function App() {
//   const [session, setSession] = useState<Session | null>(null)

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session)
//     })

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })
//   }, [])

//   return (
//     <View>
//       {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
//     </View>
//   )
// }

export default function AuthScreen() {
    return (
        <View>
            <Text>Bonjours</Text>
        </View>
    )
}