import metacriticAPI from '@alepertu/metacritic-api';
import { json } from 'stream/consumers';
import { isNullishCoalesce } from 'typescript';

const ReviewXboxOne = async ({title}) => {

    // Using xbox-one as a placeholder to initialize api.
    const api = metacriticAPI("xbox-one");

    // Returns a clean array of games but needs the input for the game's title.
    const arr = await api.searchMetacritic(title);

    for (const jsonObj of arr) {
        if (jsonObj.metaScore == null) {
            jsonObj.metaScore = "NA"
            jsonObj.scoreWord = "NA"
        }
        switch (jsonObj.refType) {
            case 'iOS Game':
                jsonObj.refType = "IOS"
                break
            case 'XONE Game':
                jsonObj.refType = "XBOX-ONE"
                break
            case 'XBSX Game':
                jsonObj.refType = "XBOX-SERIES-X"
                break
            case 'PC Game':
                jsonObj.refType = "PC"
                break
            case 'Switch Game':
                jsonObj.refType = "SWITCH"
                break
            case 'PS4 Game':
                jsonObj.refType = "PS4"
                break
            case 'PS5 Game':
                jsonObj.refType = "PS5"
                break
            case 'PS3 Game':
                jsonObj.refType = "PS5"
                break
            case 'PS2 Game':
                jsonObj.refType = "PS2"
                break
            case 'WIIU Game':
                jsonObj.refType = "WIIU"
                break
            case 'VITA Game':
                jsonObj.refType = "PSVITA"
                break
            case '3DS Game':
                jsonObj.refType = "3DS"
        }
    }

    return (
        arr
    )
}
export default ReviewXboxOne
