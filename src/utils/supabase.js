import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseClient = async (supabaseAccessToken) => {
    return createClient(supabaseUrl, supabaseKey, {
        global: {
            headers: {
                Authorization: `Bearer ${supabaseAccessToken}`,
            },
        },
    });
};

export default supabaseClient;













// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// const supabaseClient = async(supabaseAccessToken)=>{
//     const supabase= createClient(supabaseUrl, supabaseKey, {
//         global:{
//             headers: {
//                 Authorization: `Bearer ${supabaseAccessToken}`,
//             },
//         },
//     });
//     return supabase;
// };

// export default supabaseUrl
        
// // import { createClient } from '@supabase/supabase-js';

// // const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// // const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// // const supabase = createClient(supabaseUrl, supabaseKey);

// // export default supabase
        