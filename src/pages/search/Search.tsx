import {Link} from "react-router-dom";
import {getSearchState} from "../../states/SearchState.ts";
import {useEffect} from "react";
import {UserCardSearchService} from "../../data/entities/user-card-search/service/UserCardSearchService.ts";
import {useDispatch} from "react-redux";

function Search()
{
    const dispatch = useDispatch();
    const searchState=getSearchState();


    useEffect(() => {
        const fetchPokimons = async () => {

            UserCardSearchService.updateUserCardSearchService(dispatch);
        };

        fetchPokimons();
    }, []);

    return (
        <div>
            <h1>Привет, редиски, вы где?</h1>
            <Link to="/profile">Вернуться смотреть на свои недостатки</Link>
            <p>Информация для особо одаренных:</p>

            {/* 👇 Выводим список пользователей */}
            {searchState.userCardsSearch && searchState.userCardsSearch.length > 0 ? (
                <ul>
                    {searchState.userCardsSearch.map((user, index) => (
                        <li key={index} style={{ marginBottom: "1em", border: "1px solid #ccc", padding: "1em" }}>
                            <h3>{user.nickname}</h3>
                            <p>{user.description}</p>
                            {user.link_to_avatar && (
                                <img src={user.link_to_avatar} alt="Аватар" style={{ width: 100, height: 100 }} />
                            )}
                  {/*          <div>*/}
                  {/*              <strong>Теги:</strong>{" "}*/}
                  {/*              {user.tags.map(tag => (*/}
                  {/*                  <span key={tag.tag_id} style={{ marginRight: "0.5em" }}>*/}
                  {/*  #{tag.tag_name} ({tag.tag_category.category_name})*/}
                  {/*</span>*/}
                  {/*              ))}*/}
                  {/*          </div>*/}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Как печально, что вы изгой 😿</p>
            )}
        </div>
    );
}

export default Search;