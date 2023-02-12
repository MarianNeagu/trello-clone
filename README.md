[Demo](https://youtu.be/JrzDAC5Psac)

# Cerinte

## 1. Sa aiba mai multe rute  2p

In [App.js](https://github.com/MarianNeagu/trello-clone/blob/main/src/App.js) sunt toate rutele.
```javascript
<BrowserRouter>
  <Routes>
    <Route element={<PrivateRoute />}>
      <Route path="/" element={<Home />} />
    </Route>
    <Route element={<PrivateRoute />}>
      <Route path="/myaccount" element={<MyAccount />} />
    </Route>
    <Route element={<PrivateRoute />}>
      <Route path="/board/:id" element={<Board />} />
    </Route>
    <Route element={<PrivateRoute />}>
      <Route path="/myboards" element={<MyBoards />} />
    </Route>

    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="*" element={<h1>404</h1>} />
    <Route path="/test" element={<Test />} />
  </Routes>
</BrowserRouter>
```

## 2. Sa se foloseasca componente reutilizabile 2p
In folder-ul [components](https://github.com/MarianNeagu/trello-clone/tree/main/src/components) sunt componentele create de mine si reutilizate pe pagini.

## 3. Sa se comunice intre componente 2p
[BoardCard](https://github.com/MarianNeagu/trello-clone/blob/main/src/components/BoardCard.jsx) si [Header](https://github.com/MarianNeagu/trello-clone/blob/main/src/components/Header.jsx) comunica prin props. BoardCard comunica cu pagina de Home, iar Header cu toate paginile.
### Comunicarea BoardCard - Home:
```javascript
<Container maxWidth="lg" style={{ marginTop: "40px" }}>
  <Grid container spacing={2}>
    {boards.map((board, index) => (
      <Grid item key={index}>
        <BoardCard title={board.title} isStarred={board.isStarred} />
      </Grid>
    ))}
  </Grid>
</Container>
```
### Comunicarea Header - Home:
```javascript
<Header showHome={false} showMyBoards={true} showProfile={true} />
```

## 4. Rute publice si private 1p
Rutele **private** sunt incapsulate in componenta [PrivateRoute](https://github.com/MarianNeagu/trello-clone/blob/main/src/utils/PrivateRoute.jsx). Atunci cand doresti sa intri pe o ruta privata si nu esti autentificat esti redirectionat catre pagina de login. Celelalte rute sunt **publice**.

```javascript
return cookies.user ? <Outlet /> : <Navigate to="/login" />;
```

## 5. Sa fie cel putin o pagina cu un form ( login/register) 2p
Pagina de [Login](https://github.com/MarianNeagu/trello-clone/blob/main/src/pages/Login.jsx)

## 6. Firebase sau orice alt mediu de backend 1p
Pentru backend am folosit **firebase**, iar acesta este configurat si initializat in fisierul [firebase.js](https://github.com/MarianNeagu/trello-clone/blob/main/src/firebase_setup/firebase.js). Acesta a fost folosit pentru **autentificare** si pentru pastrarea **bazei de date**.


In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
