import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardFilter from "../../components/CardFilter";
import * as S from "./styles";
import { RootReducer } from "../../store";
import { changeTerm } from "../../store/reducers/filter";
import * as enums from "../../utils/enums/task";
import { Button, TextField } from "../../styles/index";

type Props = {
  showingFilters: boolean;
};

const Sidebar = ({ showingFilters }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { term } = useSelector((state: RootReducer) => state.filter);

  return (
    <S.Aside>
      <div>
        {showingFilters ? (
          <>
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
          </>
        ) : (
          <Button onClick={() => navigate("/")}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  );
};

export default Sidebar;
