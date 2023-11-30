import { useDispatch, useSelector } from "react-redux";
import CardFilter from "../../components/CardFilter";

import * as S from "./styles";
import { RootReducer } from "../../store";
import { changeTerm } from "../../store/reducers/filter";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { term } = useSelector((state: RootReducer) => state.filter);

  return (
    <S.Aside>
      <div>
        <S.Search
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <S.Filters>
          <CardFilter subtitle="pendentes" counter={1} />
          <CardFilter subtitle="concluídas" counter={2} />
          <CardFilter subtitle="urgentes" counter={3} />
          <CardFilter subtitle="importantes" counter={4} />
          <CardFilter subtitle="normal" counter={5} />
          <CardFilter subtitle="todas" counter={10} active />
        </S.Filters>
      </div>
    </S.Aside>
  );
};

export default Sidebar;
