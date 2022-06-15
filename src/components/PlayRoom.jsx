import React from "react";
import { useParams } from "react-router-dom";
import { useGetRoomByIdQuery } from "../redux/api/roomAPI";

const PlayRoom = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetRoomByIdQuery(id);
  console.log(data);
  return <div>{data.name}</div>;
};

export default PlayRoom;
