export const titleStyle = {
  color: "#fdf6e3",
  padding: "4px 12px",
  fontFamily: "Montserrat",
};

export const headerStyle = {
  backgroundColor: "#002b36",
};

export const containerStyleLiMobile = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  display: "grid",

  gridTemplateColumns: "auto auto  ",
};

export const containerStyleLi = {
  ...containerStyleLiMobile,
  gridTemplateColumns: "auto auto auto auto",
};

export const StyleLi = {
  fontFamily: "Montserrat",
  paddingTop: "5px",
};

export const contenetStyle = {};

export const styleLink = {
  color: "black",
  textDecoration: "none",
  opacity: "1",
};
export function MouseOver(event) {
  event.target.style.opacity = "0.5";
}
export function MouseOut(event) {
  event.target.style.opacity = "1";
}
export function onClick(event) {
  event.target.style.color = "green";
}
