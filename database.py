import sqlite3

con = sqlite3.connect('database.db')
cur = con.cursor()

sql = ''' CREATE TABLE mydata (
    id INTEGER PRIMARY KEY,
    r INTEGER,
    theta TEXT NOT NULL
)'''

cur.execute(sql)
con.commit()
con.close()