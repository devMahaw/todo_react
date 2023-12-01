import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../store/reducers/filter";
import * as S from "./styles";
import * as enums from "../../utils/enums/task";
import { RootReducer } from "../../store";

export type Props = {
  subtitle: string;
  criterion: "priority" | "status" | "all";
  value?: enums.Priority | enums.Status;
};

const CardFilter = ({ subtitle, criterion, value }: Props) => {
  const dispatch = useDispatch();
  const { filter, tasks } = useSelector((state: RootReducer) => state);

  const verifyIsActive = () => {
    const sameCriterion = filter.criterion === criterion;
    const sameValue = filter.value === value;

    return sameCriterion && sameValue;
  };

  const countTasks = () => {
    if (criterion === "all") return tasks.items.length;
    if (criterion === "priority") {
      return tasks.items.filter((item) => item.priority === value).length;
    }
    if (criterion === "status") {
      return tasks.items.filter((item) => item.status === value).length;
    }
  };

  const filtering = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    );
  };

  const counter = countTasks();
  const active = verifyIsActive();

  return (
    <S.Card active={active} onClick={filtering}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  );
};

export default CardFilter;
