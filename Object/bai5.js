function makeUser() {
  return {
    name: "David",
    ref: this,
  };
}

let user = makeUser();
// Trong chế độ không nghiêm ngặt, this khi đứng một mình sẽ trả về đối tượng toàn cục.
