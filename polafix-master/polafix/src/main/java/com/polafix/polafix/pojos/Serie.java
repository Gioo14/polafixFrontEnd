package com.polafix.polafix.pojos;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Serie {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private Type type;
    private String shortDescription;
    @OneToMany(cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Season> seasons;
    @ManyToMany
    private List<Actor> actors;
    @ManyToMany
    private List<Creator> creators;

    public Serie() {}

    public Serie(String name, Type type, String shortDescription) {
        setName(name);
        setType(type);
        setDescription(shortDescription);
        this.seasons = new ArrayList<Season>();
        this.actors = new ArrayList<Actor>();
        this.creators = new ArrayList<Creator>();
    } 

    public String getName() {
        return this.name;
    }

    public Type getType() {
        return type;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public List<Season> getSeasons() {
        return seasons;
    }

    public List<Actor> getActors() {
        return actors;
    }

    public List<Creator> getCreators() {
        return creators;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public void setDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public Long getIdSerie() {
        return this.id;
    }

    public void addActor(Actor actor) {
        if(!actors.contains(actor))
            this.actors.add(actor);
    }

    public void addCreator(Creator creator) {
        if(!creators.contains(creator))
            this.creators.add(creator);
    }

    public void addSeason(Season season) {
        if(!seasons.contains(season))
            this.seasons.add(season);
    }

    public void setSeasons(List<Season> stagioni){
        for(int i=0; i<stagioni.size(); i++){
            if(!seasons.contains(stagioni.get(i)))
                this.addSeason(stagioni.get(i));
        }
    }

    public void setActors(List<Actor> attori){
        for(int i=0; i<attori.size(); i++){
            if(!actors.contains(attori.get(i)))
                this.addActor(attori.get(i));
        }
    }

    public void setCreators(List<Creator> creatori){
        for(int i=0; i<creatori.size(); i++){
            if(!creators.contains(creatori.get(i)))
                this.addCreator(creatori.get(i));
        }
    }
    
    public Season getSeason(String title){
        for(int i=0; i<this.getSeasons().size(); i++){
            if(this.getSeasons().get(i).getTitle().equals(title)){
                return this.getSeasons().get(i);
            }
        }
        return null;
    }

    public Season getSeason(int number){
        for(int i=0; i<this.getSeasons().size(); i++){
            if(this.getSeasons().get(i).getNumber()==number){
                return this.getSeasons().get(i);
            }
        }
        return null;
    }

    public Chapter getChapter(Season season, int number){
        return season.getChapter(number);
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Serie)) {
            return false;
        }
        Serie serie = (Serie) o;
        return Objects.equals(id, serie.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, type, shortDescription, seasons, actors, creators);
    }
}