import { authorizeAction, userLogout } from "../../storage/actions/user-actions"
import { TUserState, userReducer } from "./user-reducer";
import supabase from "../../supabase";
import api from "../../utils/api";

jest.mock('../../supabase')

describe('user auth testing', () => {
    test('Redux userLogout action testing', () => {

        const state: TUserState = {
            isAuthChecked: false,
            data: {
                id: 'e420727b-176e-4cab-b188-8aae148b27a5',
                aud: 'authenticated',
                role: 'authenticated',
                email: 'maximmhl@mail.ru',
                email_confirmed_at: '2023-07-17T19:49:06.69752Z',
                phone: '', confirmed_at: '2023-07-17T19:49:06.69752Z',
                recovery_sent_at: '2023-07-18T11:26:11.183396Z',
                last_sign_in_at: '2023-07-19T05:49:39.298550485Z',
                app_metadata: { provider: 'email', providers: ['email'] },
                user_metadata: {},
                identities: [{
                    id: 'e420727b-176e-4cab-b188-8aae148b27a5',
                    user_id: 'e420727b-176e-4cab-b188-8aae148b27a5',
                    identity_data: { email: 'maximmhl@mail.ru', sub: 'e420727b-176e-4cab-b188-8aae148b27a5' },
                    provider: 'email', last_sign_in_at: '2023-07-17T19:49:06.695007Z',
                    created_at: '2023-07-17T19:49:06.695053Z',
                    updated_at: '2023-07-17T19:49:06.695053Z'
                }],
                created_at: '2023-07-17T19:49:06.69348Z',
                updated_at: '2023-07-19T05:49:39.300057Z'
            }
        }
    
        const newState = userReducer(state, userLogout())
    
        expect(newState.data).toBeNull()
    });
    
    test('Redux authorizeAction testing', () => {
    
        const state: TUserState = {
            isAuthChecked: false,
            data: null
        }
    
        const userRes = {
    
            data: {
                id: 'e420727b-176e-4cab-b188-8aae148b27a5',
                aud: 'authenticated',
                role: 'authenticated',
                email: 'maximmhl@mail.ru',
                email_confirmed_at: '2023-07-17T19:49:06.69752Z',
                phone: '', confirmed_at: '2023-07-17T19:49:06.69752Z',
                recovery_sent_at: '2023-07-18T11:26:11.183396Z',
                last_sign_in_at: '2023-07-19T05:49:39.298550485Z',
                app_metadata: { provider: 'email', providers: ['email'] },
                user_metadata: {},
                identities: [{
                    id: 'e420727b-176e-4cab-b188-8aae148b27a5',
                    user_id: 'e420727b-176e-4cab-b188-8aae148b27a5',
                    identity_data: { email: 'maximmhl@mail.ru', sub: 'e420727b-176e-4cab-b188-8aae148b27a5' },
                    provider: 'email', last_sign_in_at: '2023-07-17T19:49:06.695007Z',
                    created_at: '2023-07-17T19:49:06.695053Z',
                    updated_at: '2023-07-17T19:49:06.695053Z'
                }],
                created_at: '2023-07-17T19:49:06.69348Z',
                updated_at: '2023-07-19T05:49:39.300057Z'
            }
        }
    
        const newState = userReducer(state, authorizeAction(userRes.data))
    
        expect(newState.data).toBe(userRes.data)
    });

    test(('api user login'), async () => {

        const mockSignIn = jest.fn();
        supabase.auth.signInWithPassword = mockSignIn;
        mockSignIn.mockResolvedValueOnce({ data: { user: { email: 'test@example.com' } }, error: null });
        const data = await api.userLogin({ email: 'test@example.com', password: '123456789' })
        expect(data.user.email).toBe('test@example.com')      
        
    })


    
})







