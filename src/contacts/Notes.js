import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

const Notes = () => {
  const [text, onChangeText] = useState('');

  const [savedNotes, setSavedNotes] = useState([]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.NotesMainsContainer}>
          <View Style={styles.addNoteContainer}>
            <View style={styles.contactfieldValue}>
              <TextInput
                multiline={true}
                placeholder="Write here.."
                placeholderTextColor={'#BEBEBE'}
                color={'#1D1D1D'}
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
            </View>
          </View>
          <View style={styles.border}></View>
          <View style={styles.savedNotes}>
            <View style={styles.dateTimeandDltContainer}>
              <View style={styles.datetime}>
                <Text style={styles.textDateTime}>12 Nov 2022 | 01:34 pm</Text>
              </View>
              <View>
                <Icon2 name="delete-outline" size={24} color="#1D1D1D" />
              </View>
            </View>
            <View style={styles.noteView}>
              <Text style={styles.noteText}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text
              </Text>
            </View>
            <View style={styles.border}></View>
            <View style={styles.dateTimeandDltContainer}>
              <View style={styles.datetime}>
                <Text style={styles.textDateTime}>12 Nov 2022 | 01:34 pm</Text>
              </View>
              <View>
                <Icon2 name="delete-outline" size={24} color="#1D1D1D" />
              </View>
            </View>
            <View style={styles.noteView}>
              <Text style={styles.noteText}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text
              </Text>
            </View>

            {savedNotes.map(note => (
              <View key={note.id} style={styles.noteContainer}>
                <View
                  style={{
                    // backgroundColor: 'red',
                    width: scale(330),
                    alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.datetimeView}>
                    <View style={styles.datetime}>
                      {/* <Text>12 Nov 2022 | 01:34 pm</Text> */}
                      <Text style={styles.textDateTime}>
                        {note.createdAt.toString()}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        const updatedNotes = savedNotes.filter(
                          notes => notes.id !== note.id,
                        );
                        setSavedNotes(updatedNotes);
                      }}>
                      <Icon2 name="delete-outline" size={24} color="#1D1D1D" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.noteView}>
                  <Text style={styles.noteText}>{note.text}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* button */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.footerButton]}
            onPress={() => {
              if (text.trim() !== '') {
                const note = {
                  text,
                  id: Date.now(),
                  createdAt: new Date().toLocaleString(),
                  createdAt: `${date} | ${time}`,
                };
                setSavedNotes([...savedNotes, note]);
                onChangeText('');
              }
            }}>
            <Text style={[styles.footerButtonText]}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },

  NotesMainsContainer: {
    marginTop: verticalScale(26),
    // backgroundColor: 'red',
    width: scale(330),
    alignSelf: 'center',
  },

  textFieldinfo: {
    color: '#727272',
  },
  addNoteContainer: {},
  border: {
    width: scale(330),
    marginTop: verticalScale(14),
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.1,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    color: '#BEBEBE',
  },

  input: {
    fontSize: scaleFont(14),
    lineHeight: 20,
    fontFamily: 'Inter-Medium',
    color: '#1D1D1D',
  },
  // button css
  buttonContainer: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonText: {
    fontSize: verticalScale(12),
    color: 'black',
  },
  activeButton: {
    backgroundColor: '#0033A1',
  },
  activeButtonText: {
    color: '#fff',
  },
  footer: {
    width: scale(330),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(85),
  },

  footerButton: {
    backgroundColor: '#0033A1',
    borderRadius: verticalScale(6),

    height: verticalScale(42),
    justifyContent: 'center',
    width: scale(143),
  },
  footerButtonText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: scaleFont(16),
    fontFamily: 'Inter-Bold',
  },
  noteContainer: {
    width: scale(330),
    // flexDirection: 'row',
    //alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: '#BEBEBE',
  },
  noteText: {
    fontSize: scaleFont(14),
    lineHeight: 20,
    fontFamily: 'Inter-Medium',
    color: '#1D1D1D',
    flex: 1,
    marginRight: 10,
    marginTop: verticalScale(13),
  },
  savedNotes: {
    width: scale(330),
    alignSelf: 'center',
    //backgroundColor: 'blue',
  },
  textDateTime: {
    color: '#727272',
  },
  dateTimeandDltContainer: {
    //backgroundColor: 'red',
    marginTop: verticalScale(16),
    width: scale(330),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  // datetimeView: {
  //   width: scale(330),
  //   //alignSelf: 'center',
  //   alignItems: 'center',
  //   // width: scale(295),
  //   flexDirection: 'row',
  // },
  noteView: {
    // backgroundColor: 'green',
    alignSelf: 'center',
    width: scale(330),
  },
});
export default Notes;
