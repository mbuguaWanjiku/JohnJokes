import { remove, add, update, filterByCreteria } from "./array";

describe("utils-array", () => {
  it("remove an element", () => {
    const state = {
      data: [
        {
          value: "value1",
          id: 1
        },
        {
          value: "value2",
          id: 2
        }
      ]
    };

    const valueToRemove = state.data[0];
    const result = remove(state, "data", valueToRemove);
    console.log(result);
    expect(result.data.length).toEqual(1);
  });
  it("add an element", () => {
    const state = {
      data: [
        {
          value: "value1",
          id: 1
        },
        {
          value: "value2",
          id: 2
        }
      ]
    };

    const newValue = {
      value: "value3",
      id: 3
    };

    const result = add(state, "data", newValue);

    expect(result.data.length).toEqual(3);
  });
  it("update property value", () => {
    const state = {
      data: [
        {
          prop1: "value1",
          id: 1
        },
        {
          prop2: "value2",
          id: 2
        }
      ]
    };

    const newValue = {
      prop1: "value3",
      id: 1
    };

    const result = update(state, "data", "prop1", newValue);
    expect(result.data.length).toEqual(2);
    expect(state.data[0].prop1).toEqual(newValue.prop1);
  });

  it("filter by criteria- matching filter", () => {
    const state = {
      data: [
        {
          prop1: "value1",
          id: 1,
          type: "A"
        },
        {
          prop2: "value2",
          id: 2,
          type: "A"
        },
        {
          prop1: "value1",
          id: 3,
          type: "B"
        }
      ]
    };
    const criteria = "type";
    const value = "A";

    const result = filterByCreteria(state, "data", criteria,value);
    expect(result.data.length).toEqual(2);
    expect(state.data[0].type).toEqual(value);
    expect(state.data[1].type).toEqual(value);
  });
  it("filter by criteria- no matching filter", () => {
   const state = {
     data: [
       {
         prop1: "value1",
         id: 1,
         type: "A"
       },
       {
         prop2: "value2",
         id: 2,
         type: "A"
       },
       {
         prop1: "value1",
         id: 3,
         type: "B"
       }
     ]
   };
   const criteria = "type";
   const value = "ABC";

   const result = filterByCreteria(state, "data", criteria,value);
   expect(result.data.length).toEqual(3);
   expect(state.data[0].type).toEqual("A");
   expect(state.data[1].type).toEqual("A");
 });
});
