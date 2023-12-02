import { useDispatch, useSelector } from "react-redux";
import CardFilter from "../../components/CardFilter";

import * as S from "./styles";
import { RootReducer } from "../../store";
import { changeTerm } from "../../store/reducers/filter";
import * as enums from "../../utils/enums/task";
import { TextField } from "../../styles/index";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { term } = useSelector((state: RootReducer) => state.filter);

  return (
    <S.Aside>
      <div>
        <TextField
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <S.Filters>
          <CardFilter
            value={enums.Status.PENDENTE}
            criterion="status"
            subtitle="pendentes"
          />
          <CardFilter
            value={enums.Status.CONCLUIDA}
            criterion="status"
            subtitle="concluídas"
          />
          <CardFilter
            value={enums.Priority.URGENTE}
            criterion="priority"
            subtitle="urgentes"
          />
          <CardFilter
            value={enums.Priority.IMPORTANTE}
            criterion="priority"
            subtitle="importantes"
          />
          <CardFilter
            value={enums.Priority.NORMAL}
            criterion="priority"
            subtitle="normal"
          />
          <CardFilter criterion="all" subtitle="todas" />
        </S.Filters>
      </div>
    </S.Aside>
  );
};

export default Sidebar;
