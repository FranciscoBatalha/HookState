import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Input, Icon } from 'react-native-elements';

const App = () => {
  const [formValues, setFormValues] = useState({
    nome: '',
    genero: '',
    dataNascimento: '',
    usuario: '',
    senha: '',
    email: '',
    confirmarEmail: '',
    cpf: '',
    idiomaCurriculo: '',
  });

  const handleChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const handleSubmit = () => {
    console.log(formValues); // 3.1 No Console
    // Você pode fazer o envio dos dados para um servidor aqui
  };

  return (
    <ScrollView style={styles.container}>
      <Input
        label="Nome"
        leftIcon={<Icon name="user" type="font-awesome" />}
        value={formValues.nome}
        onChangeText={(value) => handleChange('nome', value)}
      />
      <Input
        label="Gênero"
        leftIcon={<Icon name="venus-mars" type="font-awesome" />}
        value={formValues.genero}
        onChangeText={(value) => handleChange('genero', value)}
      />
      <Input
        label="Data de Nascimento"
        leftIcon={<Icon name="calendar" type="font-awesome" />}
        value={formValues.dataNascimento}
        onChangeText={(value) => handleChange('dataNascimento', value)}
      />
      <Input
        label="Usuário"
        leftIcon={<Icon name="user" type="font-awesome" />}
        value={formValues.usuario}
        onChangeText={(value) => handleChange('usuario', value)}
      />
      <Input
        label="Senha"
        leftIcon={<Icon name="lock" type="font-awesome" />}
        secureTextEntry
        value={formValues.senha}
        onChangeText={(value) => handleChange('senha', value)}
      />
      <Input
        label="E-mail"
        leftIcon={<Icon name="envelope" type="font-awesome" />}
        value={formValues.email}
        onChangeText={(value) => handleChange('email', value)}
      />
      <Input
        label="Confirme seu E-mail"
        leftIcon={<Icon name="envelope" type="font-awesome" />}
        value={formValues.confirmarEmail}
        onChangeText={(value) => handleChange('confirmarEmail', value)}
      />
      <Input
        label="CPF"
        leftIcon={<Icon name="id-card" type="font-awesome" />}
        value={formValues.cpf}
        onChangeText={(value) => handleChange('cpf', value)}
      />
      <Input
        label="Idioma do Currículo"
        leftIcon={<Icon name="language" type="font-awesome" />}
        value={formValues.idiomaCurriculo}
        onChangeText={(value) => handleChange('idiomaCurriculo', value)}
      />

      <Button title="CADASTRAR" onPress={handleSubmit} />

      {/* 3.2 Em tela, logo abaixo de todos os campos */}
      {Object.entries(formValues).map(([field, value]) => (
        <Text key={field}>{`${field}: ${value}`}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;

