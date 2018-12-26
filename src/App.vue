<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">{{ $store.state.title }}</a>
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" class="nav-item" to="/" exact>
          <a class="nav-link">Главная</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/users">
          <a class="nav-link">Список пользователей</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/phonebook">
          <a class="nav-link">Телефонный справочник</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/add">
          <a class="nav-link">Добавление пользователя</a>
        </router-link>
      </ul>
    </nav>

    <main role="main" class="container"><router-view /></main>
  </div>
</template>

<style>
#app {
  margin-top: 60px;
}
</style>
