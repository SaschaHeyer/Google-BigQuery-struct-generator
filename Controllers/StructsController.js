
exports.generateStructs = async (req, res) => {
  try {
    console.log(req.query.length)

    let structsFunction =
      `
    CREATE TEMPORARY FUNCTION your_function(arr ARRAY< FLOAT64 >) 
    RETURNS
    STRUCT<
    `

    for (length = 1; length <= req.query.length; length++) {
      structsFunction += `u${length} FLOAT64`
      structsFunction += (length) == (req.query.length) ? '' : ', '
    }

    structsFunction += ">"

    structsFunction += `AS (
      STRUCT(`

    for (length = 0; length < req.query.length; length++) {
      structsFunction += `arr[OFFSET(${length})]`
      structsFunction += (length + 1) == (req.query.length) ? '' : ', '
    }

    structsFunction += `));`

    /*
    CREATE TEMPORARY FUNCTION arr_to_input(arr ARRAY<FLOAT64>)
    RETURNS 
    STRUCT<u1 FLOAT64, u2 FLOAT64, u3 FLOAT64, u4 FLOAT64, u5 FLOAT64,
    u6 FLOAT64, u7 FLOAT64, u8 FLOAT64, u9 FLOAT64, u10 FLOAT64, 
    u11 FLOAT64, u12 FLOAT64, u13 FLOAT64, u14 FLOAT64, u15 FLOAT64,
    u16 FLOAT64, u17 FLOAT64, u18 FLOAT64, u19 FLOAT64, u20 FLOAT64,
    
    u21 FLOAT64, u22 FLOAT64, u23 FLOAT64, u24 FLOAT64, u25 FLOAT64,
    u26 FLOAT64, u27 FLOAT64, u28 FLOAT64, u29 FLOAT64, u30 FLOAT64,
    
    u31 FLOAT64, u32 FLOAT64, u33 FLOAT64, u34 FLOAT64, u35 FLOAT64,
    u36 FLOAT64, u37 FLOAT64, u38 FLOAT64, u39 FLOAT64, u40 FLOAT64,
    
    u41 FLOAT64, u42 FLOAT64, u43 FLOAT64, u44 FLOAT64, u45 FLOAT64,
    u46 FLOAT64, u47 FLOAT64, u48 FLOAT64, u49 FLOAT64, u50 FLOAT64>
    
    AS (
    STRUCT(
        arr[OFFSET(0)], arr[OFFSET(1)], arr[OFFSET(2)], arr[OFFSET(3)], arr[OFFSET(4)]
        , arr[OFFSET(5)], arr[OFFSET(6)], arr[OFFSET(7)], arr[OFFSET(8)], arr[OFFSET(9)]
        , arr[OFFSET(10)], arr[OFFSET(11)], arr[OFFSET(12)], arr[OFFSET(13)], arr[OFFSET(14)]
        , arr[OFFSET(15)], arr[OFFSET(16)], arr[OFFSET(17)], arr[OFFSET(18)], arr[OFFSET(19)]
        , arr[OFFSET(20)], arr[OFFSET(21)], arr[OFFSET(22)], arr[OFFSET(23)], arr[OFFSET(24)]
        , arr[OFFSET(25)], arr[OFFSET(26)], arr[OFFSET(27)], arr[OFFSET(28)], arr[OFFSET(29)]
        , arr[OFFSET(30)], arr[OFFSET(31)], arr[OFFSET(32)], arr[OFFSET(33)], arr[OFFSET(34)]
        , arr[OFFSET(35)], arr[OFFSET(36)], arr[OFFSET(37)], arr[OFFSET(38)], arr[OFFSET(39)]
        , arr[OFFSET(40)], arr[OFFSET(41)], arr[OFFSET(42)], arr[OFFSET(43)], arr[OFFSET(44)]
        , arr[OFFSET(45)], arr[OFFSET(46)], arr[OFFSET(47)], arr[OFFSET(48)], arr[OFFSET(49)]
    ));
    
    
    */


    return res.status(201).send(structsFunction);
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
};