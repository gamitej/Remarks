from db import selectFromTable


key = ["id", "study", "remark", "day"]


def getRemarks():
    lis = []
    rows = selectFromTable("*", "remarks")
    for row in rows:
        json = {}
        for col in range(len(row)):
            json[key[col]] = row[col]
        lis.append(json)
        json = {}

    return lis
