package com.capstone.gratitude.components;

import com.capstone.gratitude.models.Organisation;
import com.capstone.gratitude.models.Praise;
import com.capstone.gratitude.models.User;
import com.capstone.gratitude.repositories.OrganisationRepository;
import com.capstone.gratitude.repositories.PraiseRepository;
import com.capstone.gratitude.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;
    @Autowired
    OrganisationRepository organisationRepository;
    @Autowired
    PraiseRepository praiseRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        Organisation starbucks = new Organisation("Starbucks", "Glasgow");
        organisationRepository.save(starbucks);
        Organisation mcdonalds = new Organisation("McDonalds", "Glasgow");
        organisationRepository.save(mcdonalds);
        Organisation codeclan = new Organisation("CodeClan", "Glasgow");
        organisationRepository.save(codeclan);
        Organisation gregs = new Organisation("Gregs", "Edinbugh");
        organisationRepository.save(gregs);
        Organisation munchys = new Organisation("Munchys", "Callander");
        organisationRepository.save(munchys);


        User user1 = new User( "Sean", "Johnson", "seanjo@hotmail.co.uk", "Glasgow", codeclan, "barista", 0, 0 );
        userRepository.save(user1);
        User user2 = new User( "Dawn", "Kerr", "email", "Callander", munchys, "barista", 0, 0 );
        userRepository.save(user2);
        User user3 = new User( "John", "Kerr", "email", "Callander", munchys, "barista", 0, 0 );
        userRepository.save(user3);
        User user4 = new User( "Ash", "Drummond", "email", "Callander", mcdonalds, "barista", 0, 0 );
        userRepository.save(user4);
        User user5 = new User( "Meg", "Law", "email", "Edinburgh", munchys, "barista", 0, 0 );
        userRepository.save(user5);



        Praise praise1 = new Praise( "time", "date", user1, user2, "Thank you for everything");
        praiseRepository.save(praise1);
        Praise praise2 = new Praise( "time", "date", user1, user3, "You gave me the world");
        praiseRepository.save(praise2);
        Praise praise3 = new Praise( "time", "date", user3, user2, "I love you");
        praiseRepository.save(praise3);
        Praise praise4 = new Praise( "time", "date", user4, user2, "Kill it with fire");
        praiseRepository.save(praise4);
        Praise praise5 = new Praise( "time", "date", user5, user1, "Build the app good!!");
        praiseRepository.save(praise5);



    }
}
